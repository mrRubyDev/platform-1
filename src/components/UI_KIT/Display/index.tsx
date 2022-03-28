import { Container } from "reactstrap";

export function FlexView({children, isTop, column, start}: any) {
  return (
      <Container style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        flexDirection: 'column',
        minHeight: '100vh',
        paddingTop: '20vh'
      }}>
          <Container style={{
            flexDirection: column ? 'column' : 'row',
            marginTop: isTop ? '6rem' : 0,
            display: 'flex',
            justifyContent: start ? 'flex-start' : 'center',
            alignItems: 'center',
            width: '100%', 
            }}>
              {children}
          </Container>
      </Container>
  )
}
