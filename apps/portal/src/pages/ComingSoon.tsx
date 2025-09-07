import { Button, Card, Badge } from '@machine/design'

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="max-w-md w-full text-center p-8 border-2 border-text-primary">
        <Badge variant="outline" className="mb-4 border-accent text-accent font-mono font-bold">
          PORTAL
        </Badge>
        <h1 className="text-4xl font-mono font-bold mb-4 text-text-primary uppercase">
          Coming Soon
        </h1>
        <p className="text-text-secondary mb-6 font-mono">
          The Machine portal is under construction.
          <br />
          <br />
          Join our waitlist to be notified when it's ready.
        </p>
        <a href="https://getwaitlist.com/waitlist/31022" target="_blank" rel="noopener noreferrer">
          <Button className="w-full font-mono font-bold uppercase border-2 border-text-primary bg-accent text-accent-foreground hover:bg-text-primary hover:text-background">
            Join Waitlist
          </Button>
        </a>
        
            </Card>
    </div>
  )
}
