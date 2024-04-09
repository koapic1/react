# 자바스크립트 기초 - 함수

> 유사하게 동작하는 중복 코드를 블록 단위로 묶어두고 원할 때 마다 호출해서 사용할 수 있게 하는 것

**함수선언**

> ```javascript
> function name() {
>   // 수행할 기능
> }
> ```
>
> 위와 같이 function 키워드를 통해 선언  
> () 에는 매개변수 {} 안에는 수행할 명력을 입력한다.  
> 위처럼 함수를 정의하는 것 을 함수 선언 이라 한다.

**함수호출**

> 선언해 둔 함수를 실행하는 작업
>
> ```javascript
> function name() {
>   console.log("함수 호출!");
> }
> name(); // 함수 호출! 출력됨
> ```
>
> 선언 이후 해당 함수의 이름을 통해 호출하고, 호출시 함수 내부에 작성된 명령을 수행  
> 함수 호출시 자바스크립트 엔진에서 한줄씩 실행 되던 코드는 함수 호출시에 멈추고,  
> 해당 함수를 선언한 곳으로 돌아가 내부의 명령을 실행 후 이후 로직을 실행합니다.

**인수와 매개변수**

> ```javascript
> function sum() {
>   let first = 1;
>   let second = 2;
>   let result = first + second;
>
>   console.log(result);
> }
> ```
>
> 만일 위와 같은 함수가 존재한다면 해당 함수는 늘 똑같은 값을 반환하게 됨  
> 해당 함수를 이용해 무언가 내가 원하는 값을 더한 결과를 만들기 위해  
> 인수와 매개변수를 이용해 값을 전달하고 전달 된 값을 더한 결과를 만들어주는 함수를 만들 수 있습니다.
>
> ```javascript
> function sum(first, second) {
>   // () 안에 작성된 것을 매개변수 라고 합니다
>   // 매개변수는 함수 호출시 전달받은 값을 저장하는 역할을 합니다
>   let firstNumber = first;
>   let secondNumber = second;
>   let result = firstNumber + secondNumber;
>   console.log(result);
> }
> sum(1, 2); // 이와 같이 함수 호출시에 전달하는 값을 인수 라고 합니다
> ```

**함수 반환**

> 함수는 호출에 대한 답으로 값을 반환할 수 있습니다.
>
> ```javascript
> function sum(first, second) {
>   return first + second;
> }
> let result = sum(10, 20);
> console.log(result); // 30
> ```
>
> 위와 같이 return 문을 통해 함수 내부에서 수행한 결과를 반환합니다.  
> 주의 할점은 함수 내부의 명령 실행중 return 문을 만나게 되면 해당 함수는 종료하게 되니  
> 함수의 모든 명령이 실행 된 이후에 결과값을 반환할 수 있도록 해야합니다.

_중첩함수, 호이스팅, 함수 표현식, 화살표 함수, 콜백 함수 등은 추후 실 사용시에 디스크립션 작성 예정_
