let plus = document.getElementById("counter-plus");
let minus = document.getElementById("counter-minus");
let valueAge = document.getElementById("valueAge").value;

plus.addEventListener("click", increment);
minus.addEventListener("click", decrement);

function increment(event) {
  event.preventDefault();
  valueAge++;
  document.getElementById("valueAge").value = valueAge;
}

function decrement(event) {
  event.preventDefault();
  valueAge--;
  document.getElementById("valueAge").value = valueAge;
}

function calculateBMI(event) {
  event.preventDefault();
  let primary = document.getElementById("before");
  let secondary = document.getElementById("after");
  let weight = document.querySelector("#inputWeight").value;
  let height = document.querySelector("#inputHeight").value;
  let bmi = document.querySelector("#mainValue");
  let title = document.querySelector("#mainTitle");
  let description = document.querySelector("#mainDescription");
  let bmiValue;

  primary.classList.add("hidden");
  secondary.classList.remove("hidden");

  let templateUnderweight = `
  <p>Being underweight has its own associated risks, listed below:</p>
  <ul>
  <li>Malnutrition, vitamin deficiencies, anemia (lowered ability to carry blood vessels)</li>
  <li>Osteoporosis, a disease that causes bone weakness, increasing the risk of breaking a bone</li>
  <li>A decrease in immune function</li>
  <li>Growth and development issues, particularly in children and teenagers</li>
  <li>Possible reproductive issues for women due to hormonal imbalances that can disrupt the menstrual cycle. Underweight women also have a higher chance of miscarriage in the first trimester</li>
  <li>Potential complications as a result of surgery</li>
  <li>Generally, an increased risk of mortality compared to those with a healthy BMI</li>
  </ul>
  <p>In some cases, being underweight can be a sign of some underlying condition or disease such as anorexia nervosa, which has its own risks. Consult your doctor if you think you or someone you know is underweight, particularly if the reason for being underweight does not seem obvious.</p>
  `;
  let templateNormal = `<h4>Your body mass index is normal.</h4>
  <p>Although BMI is a widely used and useful indicator of healthy body weight, it does have its limitations. BMI is only an estimate that cannot take body composition into account. Due to a wide variety of body types as well as distribution of muscle, bone mass, and fat, BMI should be considered along with other measurements rather than being used as the sole method for determining a person's healthy body weight.</p>`;
  let templateOverweight = `
  <p>Being overweight increases the risk of a number of serious diseases and health conditions. Below is a list of said risks, according to the Centers for Disease Control and Prevention (CDC):</p>
  <ul>
  <li>High blood pressure</li> 
  <li>Higher levels of LDL cholesterol, which is widely considered "bad cholesterol," lower levels of HDL cholesterol, considered to be good cholesterol in moderation, and high levels of triglycerides</li>
  <li>Coronary heart disease</li>
  <li>Stroke</li>
  <li>Osteoarthritis, a type of joint disease caused by breakdown of joint cartilage</li>
  <li>Sleep apnea and breathing problems</li>
  <li>Body pains and difficulty with certain physical functions</li>
  <li>Generally, an increased risk of mortality compared to those with a healthy BMI</li>
  </ul>
  <p>As can be seen from the list above, there are numerous negative, in some cases fatal, outcomes that may result from being overweight. Generally, a person should try to maintain a BMI below 25, but ideally should consult their doctor to determine whether or not they need to make any changes to their lifestyle in order to be healthier.</p>`;
  let heightInM = height / 100;
  bmiValue = weight / (heightInM * heightInM);
  console.log(height, weight);
  console.log(typeof bmiValue);
  bmi.innerText = Math.floor(bmiValue);
  if (bmiValue < 16) {
    console.log("here it stops");
    title.innerText = "Severe Thinness";
    description.innerHTML = templateUnderweight;
  } else if (bmiValue <= 16 || bmiValue < 17) {
    console.log("here it stops");
    title.innerHTML = "Moderate Thinness";
    description.innerHTML = templateUnderweight;
  } else if (bmiValue <= 17 || bmiValue < 18.5) {
    console.log("here it stops");
    title.innerHTML = "Mild Thinness";
    description.innerHTML = templateUnderweight;
  } else if (bmiValue <= 18.5 || bmiValue < 25) {
    console.log("here it stops");
    title.innerHTML = "Normal";
    description.innerHTML = templateNormal;
  } else if (bmiValue <= 25 || bmiValue < 30) {
    console.log("here it stops");
    title.innerHTML = "Overweight";
    description.innerHTML = templateOverweight;
  } else if (bmiValue <= 30 || bmiValue < 35) {
    console.log("here it stops");
    title.innerHTML = "Obese Class I";
    description.innerHTML = templateOverweight;
  } else if (bmiValue <= 35 || bmiValue < 40) {
    console.log("here it stops");
    title.innerHTML = "Obese Class II";
    description.innerHTML = templateOverweight;
  } else {
    title.innerHTML = "Obese Class III";
    description.innerHTML = templateOverweight;
  }
  return;
}

function refresh() {
  location.reload();
  return false;
}
