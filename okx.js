// config
const labels = ["ID",
"ID",
"ID"]

const wallets = ["Account",
"Account",
"Account",]

const addrPlaceholder = "You can also use a .crypto domain";

const labelPlaceholder = "e.g. my wallet";

// main
if (labels.length === wallets.length) {
  const waitForButton = (callback) => {
    let counter = 0;
    let interval = setInterval(() => {
      const button = document.querySelector('.add-address-form-btn');
      if (button && counter < labels.length - 1) {
        button.click();
        counter++;
        console.log('wallet added: ', counter);
      } else {
        clearInterval(interval);
        callback();
      }
    }, 75);
  };
  
  waitForButton(() => {
    let addrInputs = Array.from(document.querySelectorAll(`input[placeholder="${addrPlaceholder}"]`));
    let labelInputs = Array.from(document.querySelectorAll(`input[placeholder="${labelPlaceholder}"]`));
  
    if (addrInputs.length === wallets.length) {
      for(i = 0; i < wallets.length; i++) {
          addrInputs[i].setAttribute('value', wallets[i]);
          addrInputs[i].dispatchEvent(new Event('input', { bubbles: true }));
          console.log('wallet filled: ', wallets[i]);
          labelInputs[i].setAttribute('value', labels[i]);
          labelInputs[i].dispatchEvent(new Event('input', { bubbles: true }));
          console.log('name filled: ', labels[i]);
      }

      document.getElementsByClassName('okui-checkbox-inner')[0].click()
      document.getElementsByClassName('okui-checkbox-inner')[1].click()
    } else {
        console.error('count of fields and wallets is not the same.');
    }
  });

} else {
  console.error('count of wallets and names is not the same.');
}
