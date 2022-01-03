import Main from './Main';
import Link from './Link';
import Popconfirm from './Popconfirm';
import Confirm from './Confirm';
import A from './A';

type MainProps = typeof Main;

interface BGroupProps extends MainProps {
  Link: typeof Link;
  Confirm: typeof Confirm;
  Popconfirm: typeof Popconfirm;
  A: typeof A;
}

const BGroup = Main as BGroupProps;
BGroup.Link = Link;
BGroup.Popconfirm = Popconfirm;
BGroup.A = A;
BGroup.Confirm = Confirm;

export default BGroup;
