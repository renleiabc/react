/*
 * @Author: renlei
 * @Date: 2020-05-18 16:26:56
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-18 17:40:15
 * @Description:
 */
import Head from "next/head";
import Link from "next/link";
const Page = ({ title, stars }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="" content="initial-scale=1.0, width=device-width" />
      <meta name="keywords" content="HTML,ASP,PHP,SQL"></meta>
      <meta name="description" content={title}></meta>
    </Head>
    Hello world
    <p>{stars}</p>
    <div>
      click{""}
      <Link href={{ pathname: "/about", query: { name: "Zeit" } }} prefetch>
        <a>here</a>
      </Link>
      {""}
      to read more
    </div>
    <style jsx>{`
      p {
        color: blue;
      }
      div {
        background: red;
      }
      @media (max-width: 600px) {
        div {
          background: blue;
        }
      }
    `}</style>
    <style global jsx>{`
      body {
        background: black;
      }
    `}</style>
  </div>
);
Page.getInitialProps = async ({ req }) => {
  const res = await fetch(
    "http://rap2.taobao.org:38080/app/mock/222615/articleDetails"
  );
  console.log(JSON.stringify(res));
  const json = await res.json();
  console.log(JSON.stringify(json));
  return { title: json.data.articleDetails.title, stars: json.code };
};

export default Page;
