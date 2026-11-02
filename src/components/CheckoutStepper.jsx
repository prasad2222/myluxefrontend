import StepperCSS from "./CheckoutStepper.module.css";

export const CheckoutStepper = ({ currentStep = 1 }) => {
  const steps = [
    { id: 1, label: "Cart" },
    { id: 2, label: "Address & Payment" },
    { id:3 , label: "Payment"},
    { id: 4, label: "Confirmation" }
  ];

  return (
    <div className={StepperCSS['stepper-container']}>
      <div className={StepperCSS['stepper']}>
        {steps.map((step, index) => (
          <div key={step.id}>
            <div className={StepperCSS['step']}>
              <div
                className={`${StepperCSS['step-circle']} ${
                  currentStep >= step.id ? StepperCSS['active'] : ''
                } ${currentStep === step.id ? StepperCSS['current'] : ''}`}
              >
                {currentStep > step.id ? (
                  <span className={StepperCSS['checkmark']}>✓</span>
                ) : (
                  step.id
                )}
              </div>
              <span className={StepperCSS['step-label']}>{step.label}</span>
            </div>

            {index < steps.length - 1 && (
              <div
                className={`${StepperCSS['connector']} ${
                  currentStep > step.id ? StepperCSS['active'] : ''
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
