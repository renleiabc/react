/*
 * @Author: renlei
 * @Date: 2020-05-18 17:24:11
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-18 17:57:54
 * @Description:
 */
import dynamic from "next/dynamic";
const DynamicComponent = dynamic(import("../components/hello"));
const DynamicComponentWithCustomLoading = dynamic(
  import("../components/hello2"),
  {
    loading: () => <p>...213312123132</p>,
  }
);
export default () => (
  <div>
    <DynamicComponentWithCustomLoading />
    <DynamicComponent /> Welcome to About!
  </div>
);
