import { Container, Icon, Table } from 'react-materialize';
import { SocialIcon } from "react-social-icons";
import { Link } from 'react-router-dom';
import BI from "./BuildInfo"

export function Foot() {
  return (<div className="blue-grey lighten-5">
    <Container>
      <Table>
      <thead>
        <tr >
          <th>
            <td>
              <SocialIcon
                bgColor="#ff5a01"
                url="https://instagram.com/pauldowlandtile"
              />
            </td>
            <td>
              <SocialIcon
                url="https://www.facebook.com/pauldowlandtile" /> </td>
            <td>
              <SocialIcon
                url="https://twitter.com/pauldowlandtile" />
            </td>
          <td>
            <Link to="/review"><Icon>rate_review</Icon></Link>
          </td>
          </th>
        </tr>
        </thead>
        <tr>
          <td className="right sm">
            <span className='grey-text text-darken-1' > © 2019-<noscript>2018</noscript><script type="text/javascript">document.write(new Date().getFullYear());</script>2021 Deepturn Ltd, All rights reserved.</span>
            <a className="grey-text text-darken-1" href="https://github.com/LandoLabrum/Deepturn-Ltd/blob/main/LICENSE"> MIT License</a>
          </td>
          <td className="right sm">
            <span className='grey-text text-darken-1' ><BI /></span>
          </td>
        </tr>
      </Table>
    </Container></div>
  );
}