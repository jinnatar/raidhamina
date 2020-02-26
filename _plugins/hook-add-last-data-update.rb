Jekyll::Hooks.register :pages, :pre_render do |page, payload|
  modification_time = File.mtime( '_data/quests.yml' )
  payload['site']['quests-updated'] = modification_time

end
