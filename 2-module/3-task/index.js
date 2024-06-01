let calculator = {
  read(firstValue, secondValue) {
    this.firstValue = firstValue;
    this.secondValue = secondValue;

    return this;
  },
  sum() {

    return this.firstValue + this.secondValue;
  },
  mul() {

    return this.firstValue * this.secondValue;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
