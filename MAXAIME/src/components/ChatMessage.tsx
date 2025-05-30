interface ChatMessageProps {
  message: string
  isUser: boolean
  timestamp: Date
}

export function ChatMessage({ message, isUser, timestamp }: ChatMessageProps) {
  // メッセージバブルのクラス名を決定
  const getBubbleClassName = () => {
    let className = 'zen-message-bubble'
    if (isUser) {
      className += ' zen-message-bubble--sent'
    } else {
      className += ' zen-message-bubble--received'
    }
    return className
  }

  return (
    <div className={getBubbleClassName()}>
      <div className="zen-message-text">
        {message}
      </div>
      {/* 集中モードのためタイムスタンプは非表示 */}
    </div>
  )
} 