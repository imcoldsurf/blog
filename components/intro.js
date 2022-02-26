import styled from '@emotion/styled'
import Link from 'next/link'
import { useState } from 'react'

const Section = styled.section`
  height: 4.5rem;
  background-color: #1A1B1E;

  padding-left: 1rem;
  padding-right: 1rem;

  display: flex;
  align-items: center;
`

const H1 = styled.h1`
  color: #F0F0F0;
  font-weight: bold;
  margin-right: 1rem;
  font-size: 20px;
`

const H3 = styled.h3`
  color: rgb(240, 240, 240);
  transition: opacity 1s;
  font-size: 16px;
`

export default function Intro() {
  const [opacity, setOpacity] = useState(0.8)
  return (
    <Section>
      <H1>
        <Link href="/">ColdSurf Blog</Link>
      </H1>
      <H3
        style={{
          opacity
        }}
        onMouseOver={() => setOpacity(1.0)}
        onMouseOut={() => setOpacity(0.8)}
      >
        <Link href="/about-me">about me</Link>
      </H3>
    </Section>
  )
}
