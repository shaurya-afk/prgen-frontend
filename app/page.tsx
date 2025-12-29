"use client"

import { Check, Copy } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Page() {
  const [copied, setCopied] = useState(false)
  const installCommand = "pipx install git+https://github.com/shaurya-afk/prgen.git@v0.1.1"

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(installCommand)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-16">
        {/* Hero */}
        <section className="space-y-6">
          <h1 className="font-mono text-4xl font-bold tracking-tight">prgen</h1>
          <p className="text-xl text-muted-foreground">Deterministic PR descriptions from git diff.</p>
          <p className="text-base text-muted-foreground leading-relaxed">
            No AI agents. No hallucination. No automation without consent.
          </p>

          <div className="relative">
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code className="font-mono text-sm">{installCommand}</code>
            </pre>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-2 right-2"
              onClick={copyToClipboard}
              aria-label="Copy install command"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
        </section>

        {/* How it works */}
        <section className="space-y-4">
          <h2 className="font-mono text-2xl font-semibold">How it works</h2>
          <ol className="space-y-2 list-decimal list-inside text-muted-foreground">
            <li>You write code</li>
            <li>You commit changes</li>
            <li>You run prgen</li>
          </ol>
          <p className="text-muted-foreground leading-relaxed pt-2">
            git diff → deterministic rules → structured PR text
          </p>
        </section>

        {/* Example output */}
        <section className="space-y-4">
          <h2 className="font-mono text-2xl font-semibold">Example output</h2>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
            <code className="font-mono text-sm text-muted-foreground">{`## Changes

### Modified Files
- src/parser.py: Add support for multiline commit messages
- tests/test_parser.py: Add test cases for multiline parsing

### Summary
- Added logic to parse multiline commit messages
- Implemented line continuation detection
- Updated tests to cover new functionality

## Affected Components
- Parser module
- Test suite`}</code>
          </pre>
        </section>

        {/* What it deliberately does NOT do */}
        <section className="space-y-4">
          <h2 className="font-mono text-2xl font-semibold">What it deliberately does NOT do</h2>
          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
            <li>Does not post PRs</li>
            <li>Does not run in CI</li>
            <li>Does not guess intent</li>
            <li>Does not require GitHub permissions</li>
            <li>Does not depend on LLMs</li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-border">
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a
              href="https://github.com/shaurya-afk/prgen"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub repository
            </a>
            <a
              href="https://github.com/shaurya-afk/prgen/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Releases
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}
