# 자바스크립트 기초 - 변수와 상수

## 자바스크립트란?

> 웹 페이지에 동적인 기능을 장착할 수 있도록 요소의 동작을 정의 하기 위해 만들어진 언어
> 자바스크립트 엔진 프로그램을 통해 해석 하고 실행
>
> _자바스크립트 엔진 - 브라우저에 기본적으로 탑재 된 자바스크립트 해석 도구, Node.js 같은 별도의 실행환경을 세팅하지 않을 경우 반드시 브라우저를 통해 실행 해야 한다._

## 1-1. 변수와 상수

**let**

> 프로그램 실행 중 변경 될 수 있는 값을 선언할 떄 사용하는 키워드  
> 값이 없이 키워드를 붙여 '선언' 만 할 수도 있고, 최초 선언시 값을 '할당' 할 수도 있음
> 변수의 선언과 할당이 함께 이루어질 경우 '초기화' 라고 함  
> 변수의 경우 이름으로 구분하기 때문의 중복 선언은 불가능  
> _(변수의 값은 언제든 바뀔 수 있으므로 초기화는 선택사항)_  
> EX.
>
> ```javascript
> let name; // 초기화 하지 않은 변수의 선언
> let age = 10; // 변수의 선언과 동시에 할당 === 초기화
> age = 30; // 변수의 값 변경
> ```

**_var_**

> _let 과 동일하게 실행과정에서 값을 변경할 수 있는 키워드  
> 변수명 중복선언시에도 오류를 발생시키지 않아, 허용시 문제 가능성이 높으므로 사용 지양_

**_const_**

> 상수. 불변하는 값을 저장할 때 사용하는 키워드  
> let 과 달리 최초 선언시에 값을 할당해야 하며 초기화 이후 값의 변경이 불가함 _(불변!)_

### 명명규칙

- 사용 가능한 기호는 ' $ ' ,' \_ ' 두 가지만 사용
  - $ : 외부 라이브러리 객체일 경우 표시를 위해 사용
  - \_ : 두 단어 이상의 합성어일 경우 사용
- 변수의 이름에 숫자를 사용할 수 있으나 _숫자로 시작 하는 변수명은 사용 불가능_
- js 에서 사용 되는 예약어 _(let, const, if, for, ...)_ 는 변수명으로 사용 불가능
- 대소문자 구별