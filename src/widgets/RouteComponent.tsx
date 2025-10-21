// RouteComponent.tsx
interface IRoute {
  component: React.ElementType;
  layout?: React.ElementType;
  isProtected?: boolean;
}

const RouteComponent = ({ component: Component, layout: Layout }: IRoute) => {
  // Render component with or without layout, ignoring isProtected check
  return Layout ? (
    <Layout>
      <Component />
    </Layout>
  ) : (
    <Component />
  );
};

export default RouteComponent;
