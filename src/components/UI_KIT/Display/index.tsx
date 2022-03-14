import { Container } from "reactstrap";

export function FlexView({children, isTop, column}: any) {
  return (
      <Container style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        flexDirection: 'column',
        minHeight: '100vh',
      }}>
          <Container style={{
            flexDirection: column ? 'column' : 'row',
            marginTop: isTop ? '6rem' : 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%', }}>
              {children}
          </Container>
      </Container>
  )
}
