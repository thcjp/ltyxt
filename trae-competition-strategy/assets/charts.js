(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--accent2').trim();
  var accent3 = style.getPropertyValue('--accent3').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();
  var bg3 = style.getPropertyValue('--bg3').trim();

  // --- Chart 1: Evaluation Weights Pie ---
  var chart1 = echarts.init(document.getElementById('chart-eval'), null, { renderer: 'svg' });
  chart1.setOption({
    animation: false,
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c}%',
      appendToBody: true
    },
    legend: {
      orient: 'vertical',
      right: '5%',
      top: 'center',
      textStyle: { color: ink, fontSize: 13 },
      itemWidth: 14,
      itemHeight: 14
    },
    series: [{
      name: '评审维度',
      type: 'pie',
      radius: ['40%', '70%'],
      center: ['40%', '50%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 8,
        borderColor: bg3,
        borderWidth: 2
      },
      label: {
        show: true,
        position: 'inside',
        formatter: '{c}%',
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
      },
      emphasis: {
        label: { show: true, fontSize: 18, fontWeight: 'bold' }
      },
      data: [
        { value: 35, name: '创意与价值', itemStyle: { color: accent } },
        { value: 25, name: 'TRAE实践过程', itemStyle: { color: accent2 } },
        { value: 25, name: '产品完成度与体验', itemStyle: { color: accent3 } },
        { value: 15, name: '表达与展示', itemStyle: { color: '#a78bfa' } }
      ]
    }]
  });
  window.addEventListener('resize', function() { chart1.resize(); });

  // --- Chart 2: Work Assessment Radar ---
  var chart2 = echarts.init(document.getElementById('chart-radar'), null, { renderer: 'svg' });
  chart2.setOption({
    animation: false,
    tooltip: { appendToBody: true },
    radar: {
      indicator: [
        { name: '创意与价值', max: 5 },
        { name: 'TRAE实践过程', max: 5 },
        { name: '产品完成度', max: 5 },
        { name: '表达与展示', max: 5 }
      ],
      shape: 'polygon',
      splitNumber: 5,
      axisName: {
        color: ink,
        fontSize: 13,
        fontWeight: 'bold'
      },
      splitLine: { color: rule },
      splitArea: { color: [bg2, bg3] },
      axisLine: { color: rule }
    },
    series: [{
      name: '竞争力评估',
      type: 'radar',
      data: [
        {
          value: [5, 4, 5, 4],
          name: '当前评估',
          areaStyle: { color: accent + '40' },
          lineStyle: { color: accent, width: 2 },
          itemStyle: { color: accent }
        },
        {
          value: [5, 5, 5, 5],
          name: '一等奖目标',
          areaStyle: { color: accent2 + '20' },
          lineStyle: { color: accent2, width: 2, type: 'dashed' },
          itemStyle: { color: accent2 }
        }
      ]
    }],
    legend: {
      data: ['当前评估', '一等奖目标'],
      bottom: 10,
      textStyle: { color: muted, fontSize: 12 }
    }
  });
  window.addEventListener('resize', function() { chart2.resize(); });
})();
