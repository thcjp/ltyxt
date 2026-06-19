import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// 注册ScrollTrigger插件
gsap.registerPlugin(ScrollTrigger)

export function useGsap() {
  const containerRef = ref<HTMLElement | null>(null)
  let ctx: gsap.Context | null = null
  // 跟踪 celebrate 创建的粒子节点，便于卸载时清理（防止内存泄漏）
  const celebrateParticles: HTMLElement[] = []

  onMounted(() => {
    if (!containerRef.value) return
    ctx = gsap.context(() => {
      // 所有动画在此context内创建
    }, containerRef.value)
  })

  onUnmounted(() => {
    ctx?.revert()
    ctx = null
    // 清理可能残留的庆祝粒子节点（动画未完成时卸载会导致泄漏）
    celebrateParticles.forEach(p => p.remove())
    celebrateParticles.length = 0
  })

  // 在 gsap.context 内执行动画创建，确保卸载时能被 revert 清理（避免内存泄漏）
  // 若 context 尚未初始化（onMounted 之前），回退为直接执行
  function runInContext<T>(fn: () => T): T | undefined {
    if (ctx) {
      let result: T | undefined
      ctx.add(() => { result = fn() })
      return result
    }
    return fn()
  }

  // 文字逐字揭示动画
  function revealText(selector: string, delay = 0) {
    runInContext(() => gsap.fromTo(selector,
      { autoAlpha: 0, y: 20 },
      { autoAlpha: 1, y: 0, duration: 0.8, delay, ease: 'power2.out', force3D: true }
    ))
  }

  // 弹跳出现动画
  function bounceIn(selector: string, delay = 0) {
    runInContext(() => gsap.fromTo(selector,
      { autoAlpha: 0, scale: 0.3 },
      { autoAlpha: 1, scale: 1, duration: 0.6, delay, ease: 'back.out(1.7)', force3D: true }
    ))
  }

  // 打字机效果
  function typewriter(selector: string, delay = 0) {
    runInContext(() => gsap.fromTo(selector,
      { autoAlpha: 0, clipPath: 'inset(0 100% 0 0)' },
      { autoAlpha: 1, clipPath: 'inset(0 0% 0 0)', duration: 1.5, delay, ease: 'none', force3D: true }
    ))
  }

  // 数字滚动计数动画
  function counter(selector: string, target: number, delay = 0) {
    // 优先在容器范围内查找元素，避免全局查询误匹配
    const scope = containerRef.value || document
    const el = scope.querySelector(selector) as HTMLElement
    if (!el) return
    const proxy = { value: 0 }
    runInContext(() => gsap.to(proxy, {
      value: target,
      duration: 1.5,
      delay,
      ease: 'power2.out',
      snap: { value: 1 },
      onUpdate() {
        el.textContent = String(Math.round(proxy.value))
      },
    }))
  }

  // CPA过渡动画（实物→图示→符号）
  function cpaTransition(selectors: string[], delay = 0) {
    return runInContext(() => {
      const tl = gsap.timeline({ delay })
      selectors.forEach((sel, i) => {
        tl.fromTo(sel,
          { autoAlpha: 0, y: 30, scale: 0.8 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.8, ease: 'back.out(1.4)', force3D: true },
          i > 0 ? '-=0.3' : 0
        )
      })
      return tl
    })
  }

  // 浮动动画
  function float(selector: string) {
    runInContext(() => gsap.to(selector, {
      y: 'random(-8, 8)',
      rotation: 'random(-3, 3)',
      duration: 'random(2, 4)',
      ease: 'sine.inOut',
      force3D: true,
      repeat: -1,
      yoyo: true,
      repeatRefresh: true,
    }))
  }

  // 脉冲动画
  function pulse(selector: string) {
    runInContext(() => gsap.fromTo(selector,
      { scale: 1 },
      { scale: 1.05, duration: 0.8, ease: 'power1.inOut', repeat: -1, yoyo: true, force3D: true }
    ))
  }

  // 庆祝纸屑动画
  function celebrate() {
    const colors = ['#FF8C42', '#4ECDC4', '#9B59B6', '#2ECC71', '#E74C3C', '#FFD700']
    runInContext(() => {
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div')
        particle.style.cssText = `
          position: fixed; width: 10px; height: 10px; border-radius: 50%;
          background: ${colors[Math.floor(Math.random() * colors.length)]};
          left: ${50 + (Math.random() - 0.5) * 20}%;
          top: 50%; z-index: 9999; pointer-events: none;
        `
        document.body.appendChild(particle)
        // 跟踪粒子节点，卸载时兜底清理
        celebrateParticles.push(particle)
        gsap.to(particle, {
          x: (Math.random() - 0.5) * 600,
          y: (Math.random() - 1) * 400,
          autoAlpha: 0,
          scale: Math.random() * 2,
          duration: 1 + Math.random(),
          ease: 'power2.out',
          onComplete: () => {
            particle.remove()
            // 从跟踪列表中移除已清理的节点
            const idx = celebrateParticles.indexOf(particle)
            if (idx !== -1) celebrateParticles.splice(idx, 1)
          },
        })
      }
    })
  }

  // 星星飞入动画（从 fromSelector 飞向 toSelector 的位置）
  function starFlyIn(fromSelector: string, toSelector: string) {
    const toEl = (containerRef.value || document).querySelector(toSelector) as HTMLElement | null
    const fromEl = (containerRef.value || document).querySelector(fromSelector) as HTMLElement | null
    // 计算目标元素相对起点元素的位移
    let dx = 0
    let dy = 0
    if (toEl && fromEl) {
      const fromRect = fromEl.getBoundingClientRect()
      const toRect = toEl.getBoundingClientRect()
      dx = toRect.left + toRect.width / 2 - (fromRect.left + fromRect.width / 2)
      dy = toRect.top + toRect.height / 2 - (fromRect.top + fromRect.height / 2)
    }
    runInContext(() => gsap.fromTo(fromSelector,
      { autoAlpha: 1, scale: 1.5, x: 0, y: 0 },
      { autoAlpha: 0, scale: 0.5, x: dx, y: dy, duration: 0.6, ease: 'power2.in', force3D: true }
    ))
  }

  // 答题正确反馈
  function correctFeedback(selector: string) {
    runInContext(() => gsap.to(selector, {
      scale: 1.1, duration: 0.15, ease: 'power2.out', force3D: true,
      yoyo: true, repeat: 1,
    }))
  }

  // 答题错误反馈
  function wrongFeedback(selector: string) {
    runInContext(() => gsap.to(selector, {
      x: -8, duration: 0.08, ease: 'power2.out', force3D: true,
      yoyo: true, repeat: 3,
    }))
  }

  // 根据animationType执行对应动画
  function playAnimation(animationType: string, selector: string, delay = 0, options?: Record<string, unknown>) {
    switch (animationType) {
      case 'reveal': revealText(selector, delay); break
      case 'bounce': bounceIn(selector, delay); break
      case 'typewriter': typewriter(selector, delay); break
      case 'counter': {
        // counter需要target参数，从options中获取或默认0
        const target = (options?.target as number) ?? 0
        counter(selector, target, delay)
        break
      }
      case 'cpaTransition': {
        // cpaTransition需要selectors数组，从options中获取或回退到revealText
        const selectors = options?.selectors as string[] | undefined
        if (selectors && selectors.length > 0) {
          cpaTransition(selectors, delay)
        } else {
          revealText(selector, delay)
        }
        break
      }
      case 'float': float(selector); break
      case 'pulse': pulse(selector); break
      default: revealText(selector, delay)
    }
  }

  return {
    gsap,
    containerRef,
    ctx,
    revealText,
    bounceIn,
    typewriter,
    counter,
    cpaTransition,
    float,
    pulse,
    celebrate,
    starFlyIn,
    correctFeedback,
    wrongFeedback,
    playAnimation,
  }
}
