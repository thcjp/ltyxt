$files = @(
    'd:\xxysw\xxysw\star-land\src\data\chinese\grade1.ts',
    'd:\xxysw\xxysw\star-land\src\data\chinese\grade2.ts',
    'd:\xxysw\xxysw\star-land\src\data\chinese\grade3.ts',
    'd:\xxysw\xxysw\star-land\src\data\english\grade1.ts',
    'd:\xxysw\xxysw\star-land\src\data\english\grade2.ts',
    'd:\xxysw\xxysw\star-land\src\data\english\grade3.ts',
    'd:\xxysw\xxysw\star-land\src\data\math\grade1.ts',
    'd:\xxysw\xxysw\star-land\src\data\math\grade2.ts',
    'd:\xxysw\xxysw\star-land\src\data\math\grade3.ts'
)

$results = @()

foreach ($file in $files) {
    $shortName = Split-Path -Leaf $file
    $content = Get-Content -Path $file -Raw -Encoding UTF8
    
    # Extract questions and answers with line numbers
    $lines = Get-Content -Path $file -Encoding UTF8
    $inQuestion = $false
    $currentId = ''
    $currentType = ''
    $currentQuestion = ''
    $currentAnswer = ''
    $currentOptions = @()
    $currentExplanation = ''
    $currentHint = ''
    $currentLine = 0
    $braceDepth = 0
    
    for ($i = 0; $i -lt $lines.Count; $i++) {
        $line = $lines[$i]
        
        if ($line -match "id:\s*'([^']+)'") {
            $currentId = $matches[1]
            $currentLine = $i + 1
            $currentType = ''
            $currentQuestion = ''
            $currentAnswer = ''
            $currentOptions = @()
            $currentExplanation = ''
            $currentHint = ''
        }
        if ($line -match "type:\s*'([^']+)'") {
            $currentType = $matches[1]
        }
        if ($line -match "question:\s*'([^']*)'") {
            $currentQuestion = $matches[1]
        }
        if ($line -match "answer:\s*'([^']*)'") {
            $currentAnswer = $matches[1]
            
            # Now do checks
            if ($currentType -eq 'choice' -and $currentOptions.Count -gt 0 -and $currentAnswer -notin $currentOptions) {
                $results += "[CHECK1-答案不在选项中] $shortName`:$currentLine | ID=$currentId | 答案=$currentAnswer | 选项=[$($currentOptions -join ', ')]"
            }
            
            if ($currentType -eq 'fill') {
                $formulaChars = @('=', '+', '-', '*', '/', [char]0x00D7, [char]0x00F7)
                $matched = @()
                foreach ($ch in $formulaChars) {
                    if ($currentAnswer.Contains($ch)) { $matched += $ch }
                }
                $descWords = @('步骤', '过程', '先', '然后', '再', '计算', '公式', '解题', '思路')
                foreach ($w in $descWords) {
                    if ($currentAnswer.Contains($w)) { $matched += $w }
                }
                if ($matched.Count -gt 0) {
                    $results += "[CHECK2-fill答案疑似公式/描述] $shortName`:$currentLine | ID=$currentId | 答案=$currentAnswer | 匹配=[$($matched -join ',')]"
                }
            }
            
            if ($currentType -in @('fill','choice')) {
                $descWords = @('步骤', '过程', '解题思路', '计算过程', '公式')
                $matched = @()
                foreach ($w in $descWords) {
                    if ($currentAnswer.Contains($w)) { $matched += $w }
                }
                if ($matched.Count -gt 0) {
                    $results += "[CHECK7-答案含计算步骤/描述] $shortName`:$currentLine | ID=$currentId | 答案=$currentAnswer | 匹配=[$($matched -join ',')]"
                }
            }
        }
        if ($line -match "options:\s*\[") {
            $optLine = $line
            $j = $i
            while ($optLine -notmatch '\]' -and $j -lt $lines.Count) {
                $j++
                $optLine += $lines[$j]
            }
            $optMatches = [regex]::Matches($optLine, "'([^']*)'")
            $currentOptions = @($optMatches | ForEach-Object { $_.Groups[1].Value })
        }
        # Match explanation with single quotes or backtick-quoted template strings
        # Use single-quoted regex to avoid PowerShell backtick escaping issues
        if ($line -match 'explanation:\s*''([^'']*)''' -or $line -match 'explanation:\s*`([^`]*)`') {
            $currentExplanation = $matches[1]
            if ($currentAnswer -ne '' -and $currentExplanation -ne '') {
                if ($currentExplanation -notmatch [regex]::Escape($currentAnswer)) {
                    $snippet = $currentExplanation.Substring(0, [Math]::Min(60, $currentExplanation.Length))
                    $results += "[CHECK8-解析未提及答案] $shortName`:$currentLine | ID=$currentId | 答案=$currentAnswer | 解析片段=$snippet..."
                }
            }
        }
    }
}

$results | ForEach-Object { $_ }
"`n总计: $($results.Count) 个问题"
