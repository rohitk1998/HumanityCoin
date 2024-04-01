import { Row, Col } from 'antd';
import { Link as RouterLink } from 'react-router-dom';
import { APP_NAVBAR_MENU } from '../../../utils/constant';
import { useConnectMetamask } from '../../../customHooks/useConnectMetamask';

const connectAppButtonStyle = {
  minWidth: '150px',
  padding: '5px',
  height: '40px',
  backgroundColor: '#169E93',
  color: 'white',
  borderRadius: '20px',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  fontWeight: '600',
  cursor: 'pointer',
};

export default function AppHeader() {
  const [
    ethInstance,
    account,
    errorMessage,
    setIsEthInstanceActive,
    isEthInstanceActive,
    disconnect,
    contractInstance
  ] = useConnectMetamask();
  console.log('account', account);

  return (
    <div className="" style={{ width: '100%', backgroundColor: 'whitesmoke' }}>
      <Row>
        <Col span={8}>
          <Row
            style={{
              height: '70px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {APP_NAVBAR_MENU.map((menuItem) => {
              return (
                <Col span={3}>
                  <RouterLink
                    style={{ backgroundColor: 'transparent', color: 'grey' }}
                  >
                    {menuItem}
                  </RouterLink>
                </Col>
              );
            })}
          </Row>
        </Col>
        <Col span={8}>
          {/* <Row style={{height: '70px',display:'flex' , flexDirection:'row' , alignItems:'center' , justifyContent:"center"}}>
              {APP_NAVBAR_MENU.map((menuItem) => {
                return (
                  <Col span={3}>
                    <RouterLink
                      style={{ backgroundColor: 'transparent', color: 'grey' }}
                    >
                      {menuItem}
                    </RouterLink>
                  </Col>
                );
              })}
            </Row> */}
        </Col>
        <Col span={8}>
          <Row
            style={{
              height: '70px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width:'70%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'end',
              }}
            >
              {account !== '' && account !== null  ? (
                <p style={{ fontSize:"13px",fontWeight:"700",color:'grey' }}>{account.slice(0,16) + '...'}</p>
              ) : (
                <button
                  style={connectAppButtonStyle}
                  onClick={() => {
                    setIsEthInstanceActive(!isEthInstanceActive);
                  }}
                >
                  Connect
                </button>
              )}
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
