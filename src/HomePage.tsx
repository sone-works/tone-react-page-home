'use client'

import { Link } from '@nextui-org/react'

interface IHomePageProps {}

export default function HomePage({}: IHomePageProps) {
  return (
    <div className="flex self-center max-w-5xl justify-center">
      <div className="flex flex-col w-2/3 bg-primary p-4 rounded-lg text-xl font-mono text-secondary">
        <p className="mb-4">
          <span>tone</span> is an open source, artist &amp; listener owned music
          listening service.
        </p>
        <p className="mb-4">
          We're building it out right now, help us decide what an equitable
          music marketplace looks like. Come say hello over at our{' '}
          <Link
            className="text-xl text-secondary border-b-1 border-b-secondary"
            href="https://discord.com/invite/dfky8n7kFv"
            color="foreground"
            showAnchorIcon
            anchorIcon={<i className="fa-fw fa-brands fa-discord pl-1" />}
          >
            Discord
          </Link>{' '}
          or check out our codebase on{' '}
          <Link
            className="text-xl text-secondary border-b-1 border-b-secondary"
            href="https://github.com/sone-dao"
            color="foreground"
            showAnchorIcon
            anchorIcon={<i className="fa-fw fa-brands fa-github pl-1" />}
          >
            Github
          </Link>
          .
        </p>
        {/*<div>
          <Input
            className="mb-4"
            classNames={{
              label: 'text-primary',
              inputWrapper: 'text-primary',
            }}
            radius="none"
            size="lg"
            type="email"
            label="E-mail"
            labelPlacement="inside"
            variant="flat"
            placeholder="Enter your e-mail"
          />
          <div className="flex gap-2">
            <Button>Pre-register</Button>
            <Button>Login</Button>
          </div>
          </div>*/}
      </div>
    </div>
  )
}
