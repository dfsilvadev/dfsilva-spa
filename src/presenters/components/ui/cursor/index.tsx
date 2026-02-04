import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import {
  cursorMouseAnimation,
  onMouseMove,
  viewAllCursorAnimation,
  type CursorAnimationContext,
} from './anim'

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const polygonCursorRef = useRef<HTMLDivElement>(null)
  const viewAllCursorRef = useRef<HTMLDivElement>(null)
  const cursorCtx = useRef<CursorAnimationContext | null>(null)
  const viewAllCtx = useRef<CursorAnimationContext | null>(null)

  useGSAP(() => {
    const links = document.querySelectorAll('a')
    const buttons = document.querySelectorAll('button')
    const viewAllContentList = document.querySelectorAll(
      "[data-content='view-all']"
    )

    cursorCtx.current = cursorMouseAnimation(polygonCursorRef)
    viewAllCtx.current = viewAllCursorAnimation(
      viewAllCursorRef,
      polygonCursorRef,
      cursorRef
    )

    const handleMouseMove = (evt: MouseEvent) => onMouseMove(evt, cursorRef)

    document.addEventListener('mousemove', handleMouseMove)

    viewAllContentList.forEach((content) => {
      content.addEventListener('mouseenter', () =>
        viewAllCtx.current?.onEnter()
      )
      content.addEventListener('mouseleave', () =>
        viewAllCtx.current?.onLeave()
      )
    })

    links?.forEach((link) => {
      link.addEventListener('mouseenter', () => cursorCtx.current?.onEnter())
      link.addEventListener('mouseleave', () => cursorCtx.current?.onLeave())
    })

    buttons?.forEach((button) => {
      button.addEventListener('mouseenter', () => cursorCtx.current?.onEnter())
      button.addEventListener('mouseleave', () => cursorCtx.current?.onLeave())
    })

    return () => {
      cursorCtx.current?.revert()
      viewAllCtx.current?.revert()
      document.removeEventListener('mousemove', handleMouseMove)
    }
  })

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-always-on-top bg-transparent mix-blend-difference hidden min-[992px]:flex min-[992px]:items-center min-[992px]:justify-center"
    >
      <div
        ref={viewAllCursorRef}
        className="fixed -top-10 -left-20 h-20 w-20 rounded-full bg-main-primary text-[0.625rem] text-white uppercase font-bold scale-0 opacity-0 hidden items-center justify-center"
      >
        <span>saiba mais</span>
      </div>
      <div
        ref={polygonCursorRef}
        className="fixed -top-1 -left-1.5 h-[0.7rem] w-[0.7rem] pointer-events-none p-1 border border-white -rotate-45 hidden min-[992px]:flex min-[992px]:items-center min-[992px]:justify-center"
      />
    </div>
  )
}

export default Cursor
