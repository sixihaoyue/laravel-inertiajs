import React, { PropsWithChildren } from 'react';

type LayoutProps = PropsWithChildren & {
  title: string;
}

class Layout extends React.PureComponent<LayoutProps> {
  render() {
    return (
      <div>
          {this.props.children}
      </div>
    );
  }
}

export default Layout;
