import styled from 'styled-components'

const Content = styled.div`
  padding: 3em 3em 1em;
  max-width: 50em;
  margin: auto;

  h1 {
    font-size: 2.6rem;
    strong {
      font-size: 4.6rem;
      display: block;
    }
  }

  & + & {
    padding-top: 0;
  }

  a del {
    font-size: 85%;
    color: var(--nc-tx-2);
  }

  p {
    line-height: 1.8;
  }
`

export default Content
