import { useState, useRef } from 'react'

interface ChatInputProps {
  onSendMessage: (message: string) => void
}

export function ChatInput({ onSendMessage }: ChatInputProps) {
  const [message, setMessage] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      onSendMessage(message.trim())
      setMessage('')
      // 送信後にフォーカスを戻す
      setTimeout(() => {
        textareaRef.current?.focus()
      }, 100)
    }
  }

  // Enterキーでの送信（Shift+Enterで改行）
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <div className="zen-input-wrapper">
      <form onSubmit={handleSubmit} className="zen-input-form">
        <textarea
          ref={textareaRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="心を込めてメッセージを... "
          className="zen-input-field"
          rows={1}
        />
      </form>
    </div>
  )
} 