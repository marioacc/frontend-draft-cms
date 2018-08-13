<template>
    <div class="b-user">
        <div class="b-user__badge b-user__badge--full">
            <img :src="userImage" class="b-image b-user__image"/>
            <div class="b-user__info">
                <div class="b-user__name">{{userFullName}}</div>
                <div class="b-user__role">{{userRole}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'User',
        data() {
            return {
                firstName: 'Vicente',
                lastName: 'Grajeda',
                image: 'https://media.licdn.com/dms/image/C5603AQF9Ajq8wNdITA/profile-displayphoto-shrink_200_200/0?e=1539216000&v=beta&t=cXSQqTsXeKif6JUcyLxLshYqJthLWsCQJwZI-howA5Q',
                role: {name: 'Author'}
            }
        },
        computed: {
            userImage() {
                return `${this.image}`;
            },
            userFullName() {
                return `${this.firstName} ${this.lastName}`;
            },
            userRole() {
                return `${this.role.name}`;
            }
        }
    }
</script>

<style scoped>
    .b-user__image {
        max-width: 50px;
        vertical-align: top;
        border-radius: 100%;
        margin-right: var(--spacing-sm);
    }

    .b-user__info {
        display: inline-block;
        vertical-align: middle;
    }
</style>
