/* Match로 사용자 정의 패턴 사용 */
NotEmptyString = Match.Where((x)=>{
  check(x, String);
  return x.length > 0;
});

/* 이메일 형식 */
EmailString = Match.Where((x)=>{
  check(x, String);
  return /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/.test(x);
});

/* 전화번호: "000-0000-0000" */
PhoneString = Match.Where((x)=>{
  check(x, String);
  return /^\d{3}-\d{3,4}-\d{4}$/.test(x);
});

/* 특정 날짜 형식 : "yyyy/mm/dd" 1900, 2000년대의 날짜만 입력 */
BirthDayString = Match.Where((x)=>{
  check(x, String);
  return /^(19[7-9][0-9]|20\d{2})\/(0[0-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])$/.test(x);
});
