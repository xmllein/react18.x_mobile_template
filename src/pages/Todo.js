import React from 'react';
import { Modal, Space, Button } from 'antd-mobile';

export default function Todo() {
  return (
    <div>
      <h1>Todo</h1>
      <Space direction="vertical" block>
        <Button
          block
          onClick={() =>
            Modal.alert({
              content: '人在天边月上明',
              onConfirm: () => {
                console.log('Confirmed');
              },
            })
          }
        >
          最简单的弹窗
        </Button>

        <Button
          block
          onClick={() => {
            Modal.show({
              content: '人在天边月上明，风初紧，吹入画帘旌',
              closeOnAction: true,
              actions: [
                {
                  key: 'online',
                  text: '在线阅读',
                  primary: true,
                },
                {
                  key: 'download',
                  text: '下载文件',
                },
                {
                  key: 'share',
                  text: '分享',
                },
              ],
            });
          }}
        >
          自定义按钮
        </Button>
      </Space>
    </div>
  );
}
