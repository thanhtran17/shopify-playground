import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Text,
  Button,
  Icon,
  Collapsible,
  ButtonGroup,
  PageActions,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { FoodMajor } from "@shopify/polaris-icons";

import { trophyImage } from "../assets";

import { ProductsCard } from "../components";
import { useState } from "react";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Page narrowWidth>
      <TitleBar title="Test Shopify" primaryAction={null} />
      <Layout>
        <Layout.Section>
          <Button
            onClick={toggleDropdown}
            accessibilityLabel={isOpen ? "Close dropdown" : "Open dropdown"}
            ariaControls="my-dropdown"
            ariaExpanded={isOpen}
          >
            {isOpen ? "Close Dropdown" : "Open Dropdown"}
          </Button>

          <Collapsible id="my-dropdown" open={isOpen} transition={{ duration: "150ms", timingFunction: "ease" }} expandOnPrint>
            {/* Dropdown content goes here */}sdf
          </Collapsible>

          <ButtonGroup noWrap connectedTop spacing="tight">
            <Button>Bold</Button>
            <Button>Italic</Button>
            <Button>Underline</Button>
          </ButtonGroup>

          <PageActions
            primaryAction={{
              content: "Save",
            }}
            secondaryActions={[
              {
                content: "Delete",
                destructive: true,
              },
            ]}
          />
        </Layout.Section>
      </Layout>
    </Page>
  );
}

// <Page narrowWidth>
//   <TitleBar title="App name" primaryAction={null} />
//   <Layout>
//     <Layout.Section>
//       <Card sectioned>
//         <Stack wrap={false} spacing="extraTight" distribution="trailing" alignment="center">
//           <Stack.Item fill>
//             <TextContainer spacing="loose">
//               <Text as="h2" variant="headingMd">
//                 Nice work on building a Shopify app 🎉
//               </Text>
//               <p>
//                 Your app is ready to explore! It contains everything you need to get started including the{" "}
//                 <Link url="https://polaris.shopify.com/" external>
//                   Polaris design system
//                 </Link>
//                 ,{" "}
//                 <Link url="https://shopify.dev/api/admin-graphql" external>
//                   Shopify Admin API
//                 </Link>
//                 , and{" "}
//                 <Link url="https://shopify.dev/apps/tools/app-bridge" external>
//                   App Bridge
//                 </Link>{" "}
//                 UI library and components.
//               </p>
//               <p>Ready to go? Start populating your app with some sample products to view and test in your store. </p>
//               <p>
//                 Learn more about building out your app in{" "}
//                 <Link url="https://shopify.dev/apps/getting-started/add-functionality" external>
//                   this Shopify tutorial
//                 </Link>{" "}
//                 📚{" "}
//               </p>
//             </TextContainer>
//           </Stack.Item>
//           <Stack.Item>
//             <div style={{ padding: "0 20px" }}>
//               <Image source={trophyImage} alt="Nice work on building a Shopify app" width={120} />
//             </div>
//           </Stack.Item>
//         </Stack>
//       </Card>
//     </Layout.Section>
//     <Layout.Section>
//       <ProductsCard />
//     </Layout.Section>
//   </Layout>
// </Page>
