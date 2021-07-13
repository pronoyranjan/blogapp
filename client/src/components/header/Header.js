import "./header.css";

export default function Header() {
  return (
    <div className="header">
     <div className="headerTitles">
        <span className="headerTitleSm">NEW GEN </span>
        <span className="headerTitleLg">BLOG</span>
       <h1 className=" headerTitleLg1" > Its a daily reading platform to</h1>
       <h2  className=" headerTitleLg2"> boost your general knoweledge</h2>
      </div>
      <img
        className="headerImg"
        src="home-banner.jpg"
        alt=""
      />
     
    </div>
  );
}