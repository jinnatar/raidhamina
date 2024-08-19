Jekyll::Hooks.register :pages, :pre_render do |page, payload|
  quest_modification_time = File.mtime( '_data/dyn/quests.yml' )
  payload['site']['quests-updated'] = quest_modification_time
  incident_modification_time = File.mtime( '_data/dyn/incidents.yml' )
  payload['site']['incidents-updated'] = incident_modification_time
  raid_modification_time = File.mtime( '_data/dyn/raids.yml' )
  payload['site']['raids-updated'] = raid_modification_time

end
