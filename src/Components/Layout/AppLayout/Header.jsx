import { Row, Col } from 'antd';
import { Link as RouterLink } from 'react-router-dom';
import { APP_NAVBAR_MENU } from '../../../utils/constant';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount } from 'wagmi';
import { useEffect } from 'react';
import { setAccount, setIsConnected } from '../../../redux/slice/app.slice';
import { useDispatch, useSelector } from 'react-redux';

const connectAppButtonStyle = {
  minWidth: '150px',
  padding: '10px',
  height: '40px',
  backgroundColor: 'white',
  border:"1px solid lightgray",
  color: 'grey',
  borderRadius: '23px',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  fontWeight: '500',
  cursor: 'pointer',
};

export default function AppHeader() {
  const dispatch = useDispatch();
  const { open } = useWeb3Modal();

  const { address,isConnected } = useAccount();

  const { account, isConnected: isWalletConnected } = useSelector(
    (state) => state.app
  );

  useEffect(() => {
    dispatch(setIsConnected(isConnected));
    dispatch(setAccount(address));
  }, [isConnected]);

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
                width: '70%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'end',
              }}
            >
              {isWalletConnected && account !== '' ? (
                <button
                  style={connectAppButtonStyle}
                  onClick={() => {
                    open();
                  }}
                >
                  {account.slice(0,18) + "..."}
                </button>
              ) : (
                <button
                  style={connectAppButtonStyle}
                  onClick={() => {
                    open();
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
