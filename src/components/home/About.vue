<template>
  <div class="about">
    <h1>О нас</h1>
    <List :items="items"/>
    <!--    <Article :count="1" :articleData="{text: 'asfasf', img: 'https://s3-alpha-sig.figma.com/img/8cea/07d6/5735d79b971a2a4d260996730c0fc0d8?Expires=1698019200&Signature=W2gHJdPbYiV8YOTkxrL0Xrtr6QaW0S9o1Wtnqyp36dICKx7MxHXRJy8lmd8LDvEnUd-Re~roN5924XW9N-0hwtWsf0cMB5HB6BO6GAZBlJJfFn2ew4KQaDHtzi5BbWwJMjD5w-iL0~QJ6rU3OeeKgRrxsxiDX~j9Q~KG6bETRi0Pqbp61-NK1GysIUHzl575sXUm8ecS8dTDlzJZVDInMyslyGkJ3YfgBGFh8N-FiHTJ7q69loa~PLd4hK7LM1B18aYSxBA1-TitetYQjUL6iZfY2722DzJrOfIwibhgDWPPGk4sP40V5vTc9FYevwrmzoyy5za3dSSIY8GVD9CbEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' }" />-->
    <!--    <Article :count="2" :articleData="{text: 'asfasf', img: 'https://s3-alpha-sig.figma.com/img/8cea/07d6/5735d79b971a2a4d260996730c0fc0d8?Expires=1698019200&Signature=W2gHJdPbYiV8YOTkxrL0Xrtr6QaW0S9o1Wtnqyp36dICKx7MxHXRJy8lmd8LDvEnUd-Re~roN5924XW9N-0hwtWsf0cMB5HB6BO6GAZBlJJfFn2ew4KQaDHtzi5BbWwJMjD5w-iL0~QJ6rU3OeeKgRrxsxiDX~j9Q~KG6bETRi0Pqbp61-NK1GysIUHzl575sXUm8ecS8dTDlzJZVDInMyslyGkJ3YfgBGFh8N-FiHTJ7q69loa~PLd4hK7LM1B18aYSxBA1-TitetYQjUL6iZfY2722DzJrOfIwibhgDWPPGk4sP40V5vTc9FYevwrmzoyy5za3dSSIY8GVD9CbEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' }" />-->
    <!--    <Article :count="3" :articleData="{text: 'asfasf', img: 'https://s3-alpha-sig.figma.com/img/8cea/07d6/5735d79b971a2a4d260996730c0fc0d8?Expires=1698019200&Signature=W2gHJdPbYiV8YOTkxrL0Xrtr6QaW0S9o1Wtnqyp36dICKx7MxHXRJy8lmd8LDvEnUd-Re~roN5924XW9N-0hwtWsf0cMB5HB6BO6GAZBlJJfFn2ew4KQaDHtzi5BbWwJMjD5w-iL0~QJ6rU3OeeKgRrxsxiDX~j9Q~KG6bETRi0Pqbp61-NK1GysIUHzl575sXUm8ecS8dTDlzJZVDInMyslyGkJ3YfgBGFh8N-FiHTJ7q69loa~PLd4hK7LM1B18aYSxBA1-TitetYQjUL6iZfY2722DzJrOfIwibhgDWPPGk4sP40V5vTc9FYevwrmzoyy5za3dSSIY8GVD9CbEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' }" />-->

  </div>
</template>

<script>
import List from "@/components/home/about/List.vue";

export default {
  data: () => ({
    items: [
      {text: 'Наша деревня возрожденная, она существовала с 1837 года, в 80-х ее реорганизовали, дома перевезли в с. Зура, поле распахали и засеяли. От деревни не осталось и следа, даже деревьев не осталось…', img: 'https://s3-alpha-sig.figma.com/img/8cea/07d6/5735d79b971a2a4d260996730c0fc0d8?Expires=1698019200&Signature=W2gHJdPbYiV8YOTkxrL0Xrtr6QaW0S9o1Wtnqyp36dICKx7MxHXRJy8lmd8LDvEnUd-Re~roN5924XW9N-0hwtWsf0cMB5HB6BO6GAZBlJJfFn2ew4KQaDHtzi5BbWwJMjD5w-iL0~QJ6rU3OeeKgRrxsxiDX~j9Q~KG6bETRi0Pqbp61-NK1GysIUHzl575sXUm8ecS8dTDlzJZVDInMyslyGkJ3YfgBGFh8N-FiHTJ7q69loa~PLd4hK7LM1B18aYSxBA1-TitetYQjUL6iZfY2722DzJrOfIwibhgDWPPGk4sP40V5vTc9FYevwrmzoyy5za3dSSIY8GVD9CbEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'},
      {text: 'В 1990 г. мой отец Александр Геннадьевич в чистом поле без света, воды и дорог строит первый дом, начинается новая история возрождения деревни. В настоящее время уже немало сделано, с 2021 г. активно развиваем Агро туризм.', img: 'https://s3-alpha-sig.figma.com/img/398e/6e4b/444b4d70dc12e8ca9da2b34489397778?Expires=1698019200&Signature=L9~CNvrm4FmGdlNXejwHeHTsruieOZRt3qaq4EGO6rFUvoSglf51ZBrl1VZkyvOXxGDmmbPcfVe36MDEmBA2emw8~IjAySrzHyqb2XD6mYY~K~jvUh2LpjNM8liuL69wOzeh1oWunRZ9yO2IQc-Wl-O~z~At~q1ITTZBnVsi74QMvVvaGSgADJLDfDzbRluxIcDMwNDOfEg-5O5UqUQ2A8qHcgGkJsuIpkwrmmaNp94ZQEZhbaBjQ0t552yHYFeAp9-BV5iAQN-Fk6d1a34ZeKM3hsoZSHiaRij7WdmK1OhzpY3IukXfIrTy45qldWKgQlICBxX~4GJdmcVRFw4wAg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'},
      {text: 'В связи с этими обстоятельствами у меня возникла идея создания мобильного приложения для туристов. Они его скачивают и самостоятельно знакомятся с историей деревни от момента ее зарождения до сегодняшнего дня. Благодаря местному жителю осталось оочень много фотографий «старого» Мувыра и много объектов сохранилось и по сей день. ', img: 'https://s3-alpha-sig.figma.com/img/1631/7d87/19cf6561182db00b619363ed89056b19?Expires=1698019200&Signature=PBSKAsKnhmQbAn2AutcQ22LMgwBTiq82XCHfBTPbYnjYK0owKK4swxQcuYhM0R2HkTQKxdmFe~39vE7iP191eH-oMDxv7j9G4OXlBC78uEet4c5tK9vY5jVepZamD3wlmGRA~DIRRp3-jv85AWwtl849~b4aQSmbpRAT4yz7LTsBYSNYALdvsjpTo4LcW~AAjA67hqLb8P0xDCSVHyeogtFqmQQHQgbwKlw2DrTSItQiJDQ1pSBvPOaD3aavn9kNHVAnIX1wmf553LQJWEtUNiEapruUHh~bc9oqj0oFoFN7Gj7CO4KpNQ0DFWlKA4Ecr0TLMrVossXrulrsinI9RA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
    ]
  }),
  components: {List}
}
</script>

<style scoped>
.about {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 100px;
  padding: 75px 0 150px 0;
}
.about h1 {
  font-size: 2em;
  letter-spacing: 2px;
}
</style>