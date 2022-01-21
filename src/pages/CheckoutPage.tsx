import { Button } from "components/Button";
import { Dropdown } from "components/checkout/form/Dropdown";
import { Icons } from "components/checkout/form/Icons";
import { Input } from "components/checkout/form/Input";
import { Section } from "components/checkout/form/Section";
import { OrderDetailsSection } from "components/checkout/OrderDetailsSection";
import { CheckoutSummary } from "components/checkout/summary/CheckoutSummary";
import { products } from "../fake-data";

export const CheckoutPage = () => {
  // const [selectedProductId, setSelectedProductId] = useState<string>(
  //   products[0].id
  // );

  // const selectedProduct = products.find(
  //   (product) => product.id === selectedProductId
  // );

  // if (!selectedProduct) {
  //   return null;
  // }

  return (
    <div className={`grid grid-cols-1 tablet:grid-cols-[1.45fr_1fr]`}>
      <div className="w-full pt-[57px] px-[92px] pb-[92px]">
        <div className=" sm:w-full ml-auto">
          <OrderDetailsSection title="payment and shipping">
            <Section
              heading="Customer Information"
              subheading="Fields marked as (*) are required."
            >
              <div className="flex flex-col tablet:flex-row justify-between gap-[16px]">
                <Input placeholder="First name*" />
                <Input placeholder="Last name*" />
              </div>
            </Section>
            <Section heading="Shipping Address">
              <div className="flex flex-col gap-y-[16px]">
                <Input placeholder="Address*" />
                <div className="flex flex-col tablet:flex-row tablet:justify-between gap-[16px]">
                  <Dropdown
                    name="Region/State*"
                    id="Region/State*"
                    options={["Select", "New York", "UK", "Australia", "USA"]}
                  />
                  <Dropdown
                    name="country"
                    id="country"
                    options={[
                      "Select",
                      "Nevada",
                      "Washington",
                      "California",
                      "Florida",
                    ]}
                  />
                  <Input placeholder="Postal code*" />
                </div>
              </div>
            </Section>
            <Section heading="Payment Method">
              <div className="border border-solid rounded-[6px] border-Gray6 box-border">
                <div className="pt-[18px] pb-[16px] px-[15px]">
                  <h2 className="font-worksans text-small2 not-italic font-normal leading-[20px] text-Gray1">
                    Credit Card
                  </h2>
                </div>
                <div className="flex flex-col gap-[16px] bg-Gray7 py-[17px] px-[15px] border-t border-t-Gray5">
                  <Input placeholder="Card number" />
                  <div className="flex flex-row justify-between tablet:justify-start gap-[16px] w-full tablet:w-2/5">
                    <Input placeholder="MM/YY" />
                    <Input placeholder="CVV" />
                  </div>
                </div>
              </div>
            </Section>
            <Button title="Complete order" width="full" />
            <Icons />
          </OrderDetailsSection>
        </div>
      </div>
      <div className="w-full h-screen sticky top-0 bg-white">
        <div className="w-[588px] mr-auto pl-[94px] pr-[120px] pt-[88px]">
          <div className="w-full ">
            <CheckoutSummary />
          </div>
        </div>
      </div>
    </div>
  );
};
