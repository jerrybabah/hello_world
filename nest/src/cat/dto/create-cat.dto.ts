// 단순히 타입으로만 사용할거 아닌가? 메소드를 사용할 것도 아닌 것 같은데 왜 class를 사용하지?
// 왜 클래스를 사용하지?
// 클래스를 사용하는 건 적절치 않고 메소드를 정의하지 않고 데이터 타입만을 사용하게 될 것이라고 생각해보자.
// interface를 사용할까? type을 사용할까?
// interface를 사용하면 이 interface를 구현한 클래스를 사용할 수 있다.
// 그런 용도는 아니고 정말 type만을 위한 것이니까 type alias를 사용하는 게 맞지 않을까?

/**
 * dto의 타입은 크게 세 가지가 있다.
 * request dto
 * response dto
 * query dto
 */

/**
 * dto를 어떻게 관리할까?
 * 지금처럼 dto 타입 하나마다 파일을 만드는 건 아닌 것 같고...
 * dto 폴더 안에
 * request.dto.ts
 * response.dto.ts
 * query.dto.ts
 * 이렇게 관리할까?
 */

export class CreateCatDto {
  name: string;
  age: number;
  bread: string;
}