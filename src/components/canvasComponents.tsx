import {
  NOT_IMPLEMENTED_COMPONENT,
  registerUniformComponent,
} from "@uniformdev/canvas-react";
import "./CTA";
import "./CTAButton";
import "./FeatureCard";
import "./Features";
import "./Hero";

const UnImplementedComponent = (props: any) => {
  return (
    <div>
      COMPONENT {<code>{props.component.componentType}</code>} NOT IMPLEMENTED
    </div>
  );
};

registerUniformComponent({
  type: NOT_IMPLEMENTED_COMPONENT,
  component: UnImplementedComponent,
});
