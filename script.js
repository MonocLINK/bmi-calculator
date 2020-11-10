    $(document).ready(function() {
        $("#calculateBMI").click(calculateBMI);

        function calculateBMI() {
            $(".hidden").show();

            // vars
            var height = parseInt($("#heightInput").val());
            var weight = parseInt($("#weightInput").val());
            var bmi;
            var output;
            var error = false;
            if (height < 59 || height > 79 || weight < 88 || weight > 353) {
                error = true;
            }

            // calc bmi
            bmi = weight / (Math.pow(height, 2)) * 703;
            bmi = bmi.toFixed(1);

            if (bmi <= 15) {
                output = "very severely underweight";
            } else if (bmi <= 16) {
                output = "severely underweight";
            } else if (bmi <= 18.5) {
                output = "underweight";
            } else if (bmi <= 25) {
                output = "normal (healthy weight)";
            } else if (bmi <= 30) {
                output = "overweight";
            } else if (bmi <= 35) {
                output = "obese class I (moderately obese)";
            } else if (bmi <= 40) {
                output = "obese class II (severely obese)";
            } else {
                output = "obese class III (very severely obese)";

            }

            // output
            if (error) {
                $("#bmiOutput").text("nothing, please enter valid inputs.");
            } else {
                $("#bmiOutput").text(`Your BMI is ${bmi}, ${output}.`)
            }
        }
    });