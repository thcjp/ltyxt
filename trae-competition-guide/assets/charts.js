// Chart initialization for TRAE Competition Guide
(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--accent2').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();

  // --- Chart 1: 评审维度权重 ---
  var chart1 = echarts.init(document.getElementById('chart-scoring'), null, { renderer: 'svg' });
  chart1.setOption({
    animation: false,
    tooltip: { trigger: 'item', appendToBody: true },
    legend: { bottom: 0, textStyle: { color: muted, fontSize: 12 } },
    series: [{
      type: 'pie',
      radius: ['40%', '70%'],
      center: ['50%', '42%'],
      avoidLabelOverlap: false,
      itemStyle: { borderRadius: 6, borderColor: bg2, borderWidth: 2 },
      label: {
        show: true,
        position: 'outside',
        color: ink,
        fontSize: 12,
        formatter: '{b}\n{d}%'
      },
      labelLine: { show: true, lineStyle: { color: rule } },
      data: [
        { value: 35, name: '创意与价值', itemStyle: { color: accent } },
        { value: 25, name: 'TRAE实践过程', itemStyle: { color: accent2 } },
        { value: 25, name: '产品完成度与体验', itemStyle: { color: '#8b5cf6' } },
        { value: 15, name: '表达与展示', itemStyle: { color: '#f59e0b' } }
      ]
    }]
  });
  window.addEventListener('resize', function() { chart1.resize(); });

  // --- Chart 2: 竞争对手作品类型分布 ---
  var chart2 = echarts.init(document.getElementById('chart-competitor-types'), null, { renderer: 'svg' });
  chart2.setOption({
    animation: false,
    tooltip: { trigger: 'axis', appendToBody: true, axisPointer: { type: 'shadow' } },
    grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
    xAxis: {
      type: 'category',
      data: ['HTML单文件', 'Web应用', '桌面应用', '移动App', '技能插件', '硬件模拟'],
      axisLine: { lineStyle: { color: rule } },
      axisLabel: { color: muted, fontSize: 11, rotate: 15 }
    },
    yAxis: {
      type: 'value',
      axisLine: { lineStyle: { color: rule } },
      axisLabel: { color: muted, fontSize: 11 },
      splitLine: { lineStyle: { color: rule, type: 'dashed' } }
    },
    series: [{
      type: 'bar',
      barWidth: '50%',
      itemStyle: {
        color: accent,
        borderRadius: [6, 6, 0, 0]
      },
      data: [12, 6, 2, 2, 1, 3],
      label: { show: true, position: 'top', color: ink, fontSize: 12 }
    }]
  });
  window.addEventListener('resize', function() { chart2.resize(); });

  // --- Chart 3: 赛道竞争热度 ---
  var chart3 = echarts.init(document.getElementById('chart-track-heat'), null, { renderer: 'svg' });
  chart3.setOption({
    animation: false,
    tooltip: { trigger: 'axis', appendToBody: true, axisPointer: { type: 'shadow' } },
    legend: { bottom: 0, textStyle: { color: muted, fontSize: 12 } },
    grid: { left: '3%', right: '4%', bottom: '12%', containLabel: true },
    xAxis: {
      type: 'category',
      data: ['学习工作', '生活娱乐', '社会服务', '硬件交互'],
      axisLine: { lineStyle: { color: rule } },
      axisLabel: { color: muted, fontSize: 12 }
    },
    yAxis: {
      type: 'value',
      axisLine: { lineStyle: { color: rule } },
      axisLabel: { color: muted, fontSize: 11 },
      splitLine: { lineStyle: { color: rule, type: 'dashed' } }
    },
    series: [
      {
        name: '作品数量(采样)',
        type: 'bar',
        barWidth: '35%',
        itemStyle: { color: accent, borderRadius: [6, 6, 0, 0] },
        data: [14, 10, 7, 4]
      },
      {
        name: '平均票数',
        type: 'line',
        smooth: true,
        lineStyle: { color: accent2, width: 3 },
        itemStyle: { color: accent2 },
        symbolSize: 8,
        data: [0.8, 1.5, 0.6, 0.5]
      }
    ]
  });
  window.addEventListener('resize', function() { chart3.resize(); });
})();
