    function checkCode() {
      const input = document.getElementById('codeInput').value.trim();
      const result = document.getElementById('result');

      result.classList.remove("correct", "wrong");
      void result.offsetWidth;

      if (input === "Lc5dB777Zo9qx") {
        result.textContent = "✅ Correct Code! You can escape now.";
        result.classList.add("result-box", "correct");
      } else {
        result.textContent = "❌ Wrong Code! Try Again.";
        result.classList.add("result-box", "wrong");
      }
    }
