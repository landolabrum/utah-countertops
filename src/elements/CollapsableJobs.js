import {Collapsible, CollapsibleItem, Icon } from 'react-materialize';
import { ResDesc } from './residential'
import { ComDesc } from './business'

export default function CollapsibleJobs(props) {
    return <Collapsible
      accordion
      popout
    >
      <CollapsibleItem
        className="grey lighten-3"
        expanded={true}
        header={"Residential"}
        icon={<Icon>home</Icon>}
        node="div"
      >
        <ResDesc />
      </CollapsibleItem>
      <CollapsibleItem
        className="grey lighten-3"
        expanded={true}
        header="Commercial"
        icon={<Icon>business</Icon>}
        node="div">
        <ComDesc />
      </CollapsibleItem>
    </Collapsible>;
  }