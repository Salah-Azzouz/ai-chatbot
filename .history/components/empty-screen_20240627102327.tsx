import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">
          Welcome to Ai Super Agent
        </h1>
        <p className="leading-normal text-muted-foreground">
          The Bonat AI Agent is an advanced, customizable AI-powered assistant designed to enhance customer loyalty and engagement for businesses across various industries. Leveraging real-time data and intelligent analytics, the Bonat AI Agent provides actionable insights, automates customer interactions, and helps businesses optimize their loyalty programs for maximum effectiveness.
        </p>
      </div>
    </div>
  )
}
