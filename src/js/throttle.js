export default function throttle(cb, delay = 1000) {
  let shouldWait = false;
  let waitingArgs;
  const timeoutFunc = () => {
    if (waitingArgs == null) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }

    cb(...args);
    shouldWait = true;

    setTimeout(timeoutFunc, delay);
  };
}

/*

Tłumaczenie:

Funkcja uruchamia się, shouldWait ustawia się na "false".
Zwracamy funkcję z naszymi argumentami do cb(), a w niej najpierw sprawdzamy if'a czy flaga shouldWait jest true. Za pierwszym razem nie jest więc idziemy dalej.
Odpalamy callback z argumentami, shouldWait ustawia się na "true" i odpala odliczanie.

Jeżeli w trakcie odliczania funkcja była uruchamiana, to zapisywała najnowsze dane i wyłączała się zostawiając waitingArgs dla timeoutFunc.
Gdy timeoutFunc uruchamia się, sprawdza czy są oczekujące argumenty, jeśli nie ma, ustawia shouldWait na "false" i kończy pracę.
Jeżeli są argumenty oczekujące, uruchamia callback z oczekującymi argumentami, ustawia waitingArgs na "null", po czym uruchamia znowu licznik, który po upłynięciu czasu znowu uruchamia tą funkcję i ze względu na wartość "null" wyłącza metodę.

*/
