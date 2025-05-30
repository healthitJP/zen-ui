import { useState, useEffect, useRef } from 'react'
import { ChatMessage } from './ChatMessage'
import { ChatInput } from './ChatInput'

interface Message {
  id: number
  text: string
  isUser: boolean
  timestamp: Date
}

export function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  // 初期メッセージ（禅の雰囲気に合わせて）
  useEffect(() => {
    const welcomeMessage: Message = {
      id: 0,
      text: '心を静めて、集中の時間を始めましょう。',
      isUser: false,
      timestamp: new Date()
    }
    setMessages([welcomeMessage])
  }, [])

  // 改善された自動スクロール
  useEffect(() => {
    if (messagesContainerRef.current) {
      const container = messagesContainerRef.current
      // スムーズにスクロールして、入力エリアの位置を固定
      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth'
      })
    }
  }, [messages])

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now(),
      text,
      isUser: true,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, newMessage])

    // 禅らしい応答メッセージ
    setTimeout(() => {
      const zenResponses = [
        '深呼吸をして、その言葉を心に留めてください。',
        '今この瞬間に意識を向けてみましょう。',
        'あなたの考えを大切に受け止めます。',
        '静寂の中で、新しい理解が生まれます。',
        '一歩一歩、学びの道を歩んでいきましょう。',
        '心の声に耳を傾けてください。',
        '集中は、内なる平和から生まれます。'
      ]
      
      const response: Message = {
        id: Date.now() + 1,
        text: zenResponses[Math.floor(Math.random() * zenResponses.length)],
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, response])
    }, 800)
  }

  return (
    <div className="zen-chat-window">
      {/* メッセージエリア（フェード効果付き） */}
      <div className="zen-messages-wrapper">
        {/* 上部フェード */}
        <div className="zen-fade-top" />
        
        <div className="zen-messages-container" ref={messagesContainerRef}>
          {messages.map(message => (
            <ChatMessage
              key={message.id}
              message={message.text}
              isUser={message.isUser}
              timestamp={message.timestamp}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        {/* 下部フェード */}
        <div className="zen-fade-bottom" />
      </div>
      
      {/* 入力エリア */}
      <div className="zen-input-container">
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  )
} 