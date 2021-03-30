
import React, { Component} from 'react';
import LexChatBot from "./LexChart";
class LexChatConfig extends Component {
  render() {
    return (
        <LexChatBot botName="qc_sre"
                 IdentityPoolId=""
                 placeholder="Type Start/Stop/Instance Name "
                 style={{position: 'absolute'}}
                 backgroundColor="#F0FFFF"
                 height="500px"
                 region="us-east-1"
                 headerText="Please Ping me Here" />
    )
  }
}
export default LexChatConfig;
