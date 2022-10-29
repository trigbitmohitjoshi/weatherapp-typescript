import React from "react";
function VerticalSpacer({ space }: { space: string }) {
  const spacerRef = React.createRef<HTMLSpanElement>();
  React.useEffect(() => {
    spacerRef.current!.style.marginTop = space;
  }, [space, spacerRef]);

  return <span ref={spacerRef} />;
}

export default VerticalSpacer;
