import { useEffect, useRef, useState } from "react"

const ColorText = ({ text }: { text: string }) => {
    const [textColor, setTextColor] = useState('#809490')
    const textRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleScroll = () => {
            if (!textRef.current) return
            const textHeight = textRef.current.getBoundingClientRect()
            const textHeight2 = textRef.current.offsetHeight
            const screenHight = window.innerHeight
            //console.log(Math.min(Math.abs((textHeight.top + (textHeight2 / 2) - (screenHight / 2))/((screenHight/2)/100)), 100))

            const color1 = '#0F1322'
            const color2 = '#e6efef'
            // const percent = 0
            const percent = Math.min(Math.abs((textHeight.top + (textHeight2 / 2) - (screenHight / 2))/((screenHight/2)/100)), 100)

            const rgb1 = hexToRgb(color1)
            const rgb2 = hexToRgb(color2)

            const red = Math.round(rgb1.r + (rgb2.r - rgb1.r) * (percent / 100))
            const green = Math.round(rgb1.g + (rgb2.g - rgb1.g) * (percent / 100))
            const blue = Math.round(rgb1.b + (rgb2.b - rgb1.b) * (percent / 100))

            const newColor = rgbToHex(red, green, blue)
            setTextColor(newColor)
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    function hexToRgb(hex: string): { r: number; g: number; b: number } {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
        } : { r: 0, g: 0, b: 0 }
    }
    function rgbToHex(r: number, g: number, b: number): string {
        return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)
    }

    return (
        <span ref={textRef} style={{ color: textColor }} className="transition-colors">
            {text}
        </span>
    )
}

export default ColorText
