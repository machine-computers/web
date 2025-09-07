import { Button, Card } from '@machine/design'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="max-w-md w-full text-center p-8 border-2 border-text-primary">
        <h1 className="text-6xl font-mono font-bold mb-4 text-text-primary">
          404
        </h1>
        <p className="text-text-secondary mb-6 font-mono">
          Page not found.
        </p>
        <Link to="/">
          <Button className="w-full font-mono font-bold uppercase border-2 border-text-primary bg-accent text-accent-foreground hover:bg-text-primary hover:text-background">
            Go Home
          </Button>
        </Link>
      </Card>
    </div>
  )
}
