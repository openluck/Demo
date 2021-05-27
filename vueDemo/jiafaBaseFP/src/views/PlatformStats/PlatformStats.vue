<template>
  <div>1</div>
</template>

<script>
export default {
  created() {
    if (sessionStorage.getItem("role") === "1") {
      //学生
      if (window.location.hash === "#/platformStats") {
        this.$router.push("/studentExam");
      }
    } else if (sessionStorage.getItem("role") === "2") {
      //老师
      if (window.location.hash === "#/platformStats") {
        this.$router.push("/TeacherExam");
      }
    } else if (sessionStorage.getItem("role") === "3") {
      //管理员
      if (window.location.hash === "#/platformStats") {
        this.$router.push("/TeacherExam");
      }
    }
  }
};
</script>

<style></style>
