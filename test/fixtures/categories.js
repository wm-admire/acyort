module.exports = `
{% extends 'layout.html' %}

{% block title %}
{{ __('title.categories') }} | {{ config.title }}
{% endblock %}

{% block content %}
<div class="center clouds">
  <p class="head-tag">{{ __('title.categories') }}more</p>

  <div>
    {% for category in page %}
    <p>
      <a href="{{ _url(category.url) }}">{{ category.name }}</a>
      <span>({{ category.posts.length }})</span>
    </p>
    {% endfor %}
  </div>
</div>
{% endblock %}
`
