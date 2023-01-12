import React, { PropsWithChildren } from 'react';

type LayoutProps = PropsWithChildren & {
  title: string;
}

class Layout extends React.PureComponent<LayoutProps> {
  render() {
    console.log(this.props);

    return (
      <div>
          {this.props.children}
      </div>
    );
  }
}

export default Layout;
