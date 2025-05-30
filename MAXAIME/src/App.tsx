import { useState, useEffect } from 'react'
import { ChatWindow } from './components/ChatWindow'
import './styles/zen-design-system.css'

function App() {
  const [isFullscreen, setIsFullscreen] = useState(false)

  // 全画面状態の変更を監視
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }
  }, [])

  // 全画面モードの切り替え
  const toggleFullscreen = async () => {
    if (!isFullscreen) {
      try {
        await document.documentElement.requestFullscreen()
      } catch (error) {
        console.error('全画面化に失敗しました:', error)
      }
    } else {
      try {
        await document.exitFullscreen()
      } catch (error) {
        console.error('全画面終了に失敗しました:', error)
      }
    }
  }

  // 非全画面時の表示（禅開始前）
  if (!isFullscreen) {
    return (
      <div className="zen-app">
        <div className="zen-container" style={{ 
          height: 'auto', 
          justifyContent: 'center', 
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <h1 style={{ 
            fontFamily: 'var(--font-heading)',
            fontSize: 'var(--text-3xl)',
            color: 'var(--zen-gray-800)',
            marginBottom: 'var(--space-8)',
            fontWeight: '300'
          }}>
            禅チャット
          </h1>
          
          <p style={{ 
            fontSize: 'var(--text-lg)',
            color: 'var(--zen-gray-600)',
            marginBottom: 'var(--space-12)',
            lineHeight: 'var(--leading-relaxed)',
            maxWidth: '400px'
          }}>
            集中と学習のための<br />
            ミニマルチャット環境
          </p>
          
          <button 
            onClick={toggleFullscreen}
            className="zen-start-button"
            style={{ fontSize: 'var(--text-lg)' }}
          >
            禅開始
          </button>
        </div>
      </div>
    )
  }

  // 全画面時の表示（常に集中モード）
  return (
    <div className="zen-app zen-app--focus-mode">
      {/* 集中インジケーター */}
      {/* <div className="zen-focus-indicator" /> */}
      {/* メインコンテンツ */}
      <div className="zen-container">
        <ChatWindow />
      </div>
    </div>
  )
}

export default App
