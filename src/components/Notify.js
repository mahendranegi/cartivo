import React, { useEffect } from "react";
import { message } from "antd";

const Notify = ({ notify, title }) => {
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    if (notify) {
      messageApi.open({
        type: "success",
        content: title,
        duration: 2,
      });
    }
  }, [notify]);

  return <>{contextHolder}</>;
};

export default Notify;